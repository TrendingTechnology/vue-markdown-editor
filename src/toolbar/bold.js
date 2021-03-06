import { bold } from '@/utils/constants/command';

export default {
  name: bold,
  icon: 'v-md-icon-bold',
  title: () => '粗体（Ctrl+B）',
  action(editor) {
    editor.execCommand(bold);
  },
};
