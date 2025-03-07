import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.API_KEY
});


export async function POST(req: NextRequest){
    const { query } = await req.json();

    try{
        if(query == ""){
            return NextResponse.json({
                message: "invalid query"
            }, {
                status: 403
            });
        }

        const response: any = await youtube.search.list({
            //@ts-ignore
            part: 'snippet' ,
            q: `${query} song`,
            type: 'video',
            maxResults: 4
        });

        const videos = response.data.items.map((item: any) => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url
        }));

        return NextResponse.json({videos});
    } catch (err){
        console.error(`${err}`);
        return NextResponse.json({
            message : `${err}`
        }, {
            status : 403
        });
    }
}