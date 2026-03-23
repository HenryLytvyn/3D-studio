import { Icon } from '@/components/Icon/Icon';
import css from './FilesList.module.css';
import { getFileKind } from '@/lib/utils/getFileKind';
import ImagePreview from '@/components/ImagePreview/ImagePreview';
import ModelPreview from '../ModelPreview/ModelPreview';
import { motion, AnimatePresence } from 'framer-motion';
import { useAutoHeight } from '@/lib/hooks/useAutoHeight';

interface Props {
  filesArray: File[];
  removeFile: (array: File[]) => void;
}

export default function FilesList({ filesArray, removeFile }: Props) {
  const { ref, height } = useAutoHeight<HTMLUListElement>([filesArray.length]);

  return (
    <AnimatePresence>
      <motion.ul
        ref={ref}
        style={height !== null ? { height } : undefined}
        animate={height !== null ? { height } : undefined}
        transition={{ duration: 0.4, ease: 'linear' }}
        className={css.filesList}
      >
        {filesArray.map((file, index) => {
          const kind = getFileKind(file);

          return (
            <motion.li
              key={`${file.name}-${file.lastModified}`}
              layout
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={css.fileItem}
            >
              {kind === 'image' && <ImagePreview file={file} />}
              {kind === '3d' && <ModelPreview file={file} />}

              {(kind === 'image' || kind === '3d') && (
                <button
                  type="button"
                  className={css.removeFileBtn}
                  onClick={() => {
                    const updatedFiles = filesArray.filter(
                      (_, i) => i !== index
                    );
                    removeFile(updatedFiles);
                  }}
                >
                  <Icon name="icon-remove" className={css.removeBtnIcon} />
                </button>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </AnimatePresence>
  );
}
