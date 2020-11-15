// Todo расширить список типов файлов для отображения соответствующих иконок
// https://materialdesignicons.com

const typeToIconMap = {
  'image':      'mdi-image',
  'json':       'mdi-code-json',
  'javascript': 'mdi-nodejs',
  'html':       'mdi-language-html5',
  'css':        'mdi-language-css3',
  'x-scss':     'mdi-sass',
  'x-sass':     'mdi-sass',
  'folder':     'mdi-folder',
}

export class FileItem {
  constructor(params) {
    this.name = params.name
    this.size = params.size
    this.lastModified = params.lastModified
    this.extname = params.extname
    this.type = params.type
    this.icon = FileItem.setIconName(params.type)
  }

  static setIconName(type) {
    if (!type) {
      return typeToIconMap['folder']
    }
    const [groupType, fileType] = type.split('/')
    return typeToIconMap[groupType] || typeToIconMap[fileType] || typeToIconMap['folder']
  }
}
