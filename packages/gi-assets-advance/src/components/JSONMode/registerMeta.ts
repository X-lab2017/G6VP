import { extra } from '@antv/gi-sdk';
import info from './info';
const { deepClone, GIAC_CONTENT_METAS } = extra;
const metas = deepClone(GIAC_CONTENT_METAS);

metas.GIAC_CONTENT.properties.GIAC_CONTENT.properties.title.default = info.name;
metas.GIAC_CONTENT.properties.GIAC_CONTENT.properties.icon.default = info.icon;
metas.GIAC_CONTENT.properties.GIAC_CONTENT.properties.tooltip.default = info.desc;
metas.GIAC_CONTENT.properties.GIAC_CONTENT.properties.containerWidth.default = '400px';

const themeOptions = ['tomorrow', 'rjv-default', 'google', 'harmonic', 'mocha', 'solarized'];

const registerMeta = ({ schemaData }) => {
  const schema = {
    theme: {
      title: '样式主题',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        options: themeOptions.map(theme => ({
          value: theme,
          label: theme,
        })),
      },
      default: 'rjv-default',
    },
    ...metas,
  };

  return schema;
};

export default registerMeta;
