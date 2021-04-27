import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { NFTStorage, Blob } from 'nft.storage'

const MyUploader = () => {
const endpoint = 'https://nft.storage/api/upload'
const token = process.env.NFT_STORAGE_KEY // your API key from https://nft.storage/manage
const getUploadParams = () => ({ url: endpoint,
headers: { "Authorization": "Bearer " + token
  }})


 
const handleChangeStatus = ({ meta, file, status}) => { console.log( meta, file, status)}

const handleSubmit = (files, allFiles) => {
console.log(files.map(f => f.meta))

allFiles.forEach(f => f.remove()) 



 async function main() {
   
    const store = new NFTStorage({ endpoint, token })
    const data =  files
    const cid = await store.storeBlob(new Blob([data]))
    log({ data})
    console.log({ data, cid })
     function log(msg) {
    document.getElementById('out').innerHTML+= `${JSON.stringify(
        
      data[0].xhr.responseText, 

        2
    )}\n` 
  }
  }
  main()

}

return (
<Dropzone
getUploadParams={getUploadParams}
onChangeStatus={handleChangeStatus}
onSubmit={handleSubmit}
accept='image/*, image/gif, audio/*, video/*, gif/*, .gif, .pdf, .mp3' 
inputContent={() => ( 'Drag NFT')}

/>
)
}
<MyUploader />

export default MyUploader; 
