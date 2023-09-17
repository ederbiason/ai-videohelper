import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma";
import fastifyMultipart from "@fastify/multipart"
import path from "node:path";
import { randomUUID } from "node:crypto"
import fs from "node:fs"
import { pipeline } from "node:stream"
import { promisify } from "node:util";

// Stream: quando os arquivos estao chegando no backend, ja começamos a salvar eles no disco. Mas isso demora um tempo, entao usamos o pipeline que serve para aguardar esse processo de upload terminar
const pump = promisify(pipeline)

export async function uploadVideoRoute(app: FastifyInstance) {
    app.register(fastifyMultipart, {
        limits: {
            // File Size 25mb
            fileSize: 1_048_576 * 25,
        }
    })
    
    app.post('/videos', async (request, reply) => {
        const data = await request.file()

        if (!data) {
            return reply.status(400).send({error: "Missing file input."})
        }

        const extension = path.extname(data.filename)

        if (extension !== '.mp3') {
            return reply.status(400).send({error: "Invalid input type, please upload a MP3."})
        }

        const fileBaseName = path.basename(data.filename, extension)
        const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`

        const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadName)

        // pump(recebo upload, escrevo os dados do arquivo)
        await pump(data.file, fs.createWriteStream(uploadDestination))

        const video = await prisma.video.create({
            data: {
                name: data.filename,
                path: uploadDestination,
            }
        })

        return {
            video,
        }
    })
}
