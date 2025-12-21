import css from './FilesList.module.css';

interface Props {
  filesArray: File[];
  //   filesQuentity: number;
  removeFile: (array: File[]) => void;
}

export default function FilesList({
  filesArray,
  //   filesQuentity,
  removeFile,
}: Props) {
  return (
    <ul className={css.filesList}>
      {filesArray.map((file, index) => (
        <li key={`${file.name}-${index}`} className={css.fileItem}>
          <img
            className={css.uploadImage}
            src={`${URL.createObjectURL(file)}`}
          />

          {/* <span className={css.fileName}>{file.name}</span> */}

          {/* <span className={css.fileSize}>
                        {(file.size / 1024).toFixed(1)} KB
                      </span> */}

          <button
            type="button"
            className={css.removeFileBtn}
            onClick={() => {
              const updatedFiles = filesArray.filter((_, i) => i !== index);
              removeFile(updatedFiles);
              //   formik.setFieldValue('filesUrl', updatedFiles);
              //   if (updatedFiles.length <= filesQuentity)
              //     setIsUploadDisabled(false);
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
