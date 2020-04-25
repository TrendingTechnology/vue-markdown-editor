import { ol } from '@/utils/constants/command';

export default {
  name: ol,
  icon: 'v-md-icon-ol',
  title: '有序列表（Ctrl+O）',
  action(editor) {
    editor.execCommand(ol);
  },
};
