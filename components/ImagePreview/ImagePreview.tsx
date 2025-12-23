'use client';

import { useEffect, useState } from 'react';
import css from './ImagePreview.module.css';

interface Props {
  file: File;
}

export default function ImagePreview({ file }: Props) {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setSrc(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  return (
    src !== '' && <img src={src} className={css.uploadImage} alt={file.name} />
  );
}
