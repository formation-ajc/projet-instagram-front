import React, {useRef} from 'react'

export type FileUploaderProps = {
  onFileSelect: Function
}

const FileUploader = ({onFileSelect}: FileUploaderProps) => {
  const fileInput = useRef(null)

  const handleFileInput = (e: any) => {
    // handle validations
    onFileSelect(e.target.files[0])
  }

  return (
    <div className="file-uploader">
      <input type="file" id="selectedFile" onChange={handleFileInput} className="hidden" />
      <input
          type="button"
          value={"Select on computer"}
          className={"bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-2 px-3 cursor-pointer"}
          onClick={() => document?.getElementById('selectedFile')?.click()}
      />
      {/*<input type="file" onChange={handleFileInput}/>*/}
    </div>
  )
}

export default FileUploader;