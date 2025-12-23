import { Icon } from '@/components/Icon/Icon';
import css from './FilesList.module.css';
import { getFileKind } from '@/lib/utils/getFileKind';
import ImagePreview from '@/components/ImagePreview/ImagePreview';
import ModelPreview from '../ModelPreview/ModelPreview';

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
      {filesArray.map((file, index) => {
        const kind = getFileKind(file);

        return (
          <li key={`${file.name}-${index}`} className={css.fileItem}>
            {kind === 'image' && <ImagePreview file={file} />}

            {kind === '3d' && <ModelPreview file={file} />}
            {/* {kind === '3d' && <div className={css.modelPreview}>3D MODEL</div>} */}

            <button
              type="button"
              className={css.removeFileBtn}
              onClick={() => {
                const updatedFiles = filesArray.filter((_, i) => i !== index);
                removeFile(updatedFiles);
              }}
            >
              <Icon name="icon-remove" className={css.removeBtnIcon} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
