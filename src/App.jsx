import axios from "axios";
import { useRef, useState } from "react";
import { youtubes } from "./utils/utils";

const App = () => {
  const inputUrl = useRef()
  const [result, setResult] = useState(null)

  const handleButton = (e) => {
    e.preventDefault()
    // const youtubeId = youtubes(inputUrl.current)
    const tiktokURL = inputUrl.current.value
    

    const option = {
      method: 'GET',
      url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/index',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
      },
      params: {
        url: tiktokURL
      }
    }

    axios(option)
     .then(res => setResult(res.data.video))
     .catch(err => console.log(err))
    inputUrl.current.value = ''
  }
  
  return (
    <div className="max-w-5xl p-5 mx-auto">
      <div className="flex items-center justify-between">
        <div className="invisible"></div>
        <div>
          <div className="inline-flex">
            <a href="https://trakteer.id/eskey/tip" className="text-white py-2.5 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-3xl" height="1em" width="1em" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </a>
            <a href="https://github.com/Eskeyz/youtube-to-mp3" className="text-white text-center pl-5 py-2.5">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
            </a>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center mt-44">
        <h1 className="text-4xl subpixel-antialiased font-semibold text-white">Youtube to MP3</h1>
        <p className="mt-2 text-xl text-center text-gray-400">Convert Youtube videos into MP3s in just a few seconds</p>
        <form onSubmit={handleButton} className="mt-4 text-center">
          <div className="relative w-80 md:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </div>
            <input ref={inputUrl} type="text" className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none" placeholder="Paste a youtube video link. . ."  />
          </div>
          <button type="submit" className="text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-full text-sm px-14 py-2.5 text-center inline-flex items-center mt-4">
            Convert
          </button>
        </form>
      {result ? <a href={result} target="_blank" download={video} rel="noreferrer" className="text-green-500 bg-gray-700 hover:bg-gray-600 border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-full text-sm px-14 py-2.5 text-center inline-flex items-center mt-4">Test</a> : ''}
      </section>
    </div>
  )
}

export default App;