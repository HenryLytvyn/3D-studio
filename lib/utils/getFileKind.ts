import { ALLOWED_3D_EXTENSIONS } from '../constants';

export function getFileKind(file: File): 'image' | '3d' | 'unknown' {
  const ext = file.name.split('.').pop()?.toLowerCase();

  if (file.type.startsWith('image/')) return 'image';

  if (ext && ALLOWED_3D_EXTENSIONS.includes(ext)) return '3d';

  return 'unknown';
}
