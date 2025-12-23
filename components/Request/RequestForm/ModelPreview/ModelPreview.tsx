import Image from 'next/image';
import css from './ModelPreview.module.css';
import { ALLOWED_3D_EXTENSIONS } from '@/lib/constants';

interface Props {
  file: File;
}

export default function ModelPreview({ file }: Props) {
  // const isAllowedFile = ALLOWED_3D_EXTENSIONS.includes(file.type);
  // console.log(file.type);
  const imagePlaceholder = '/img/request/3D-placeholder-mobile.jpg';
  return (
    <div className={css.modelPreview}>
      <Image
        src={imagePlaceholder}
        alt="Your 3d model"
        width="335"
        height="335"
        className={css.modelPreviewImage}
      />
      <p className={css.fileName}>{file.name}</p>
    </div>
  );
}
