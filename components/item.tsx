interface Props {
    title: string;
    thumbnail: string
}

export const Item = ({title, thumbnail}: Props) => {
    return <div className="flex justify-between p-2 border border-slate-200 rounded-md w-auto mb-2">
            <div>
                <img className="w-24 sm:w-32 border rounded-lg" src={thumbnail} alt="Error" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="flex flex-col justify-center">
                    <p className="font-semibold text-md">{title.slice(0, 30)}</p>
                </div>
            </div>
    </div>
}