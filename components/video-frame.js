export default function VideoFrame({src, title}){
    return(
        <div className='relative p-5 bg-pink-100 flex justify-center align-center'>
            <iframe className=' pin' src={src} title={title}/>
        </div>
    );
}