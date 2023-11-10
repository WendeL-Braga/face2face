import type { StoryObj, Meta } from '@storybook/html';

import { avatar } from './index';
import type {AvatarProps} from './index';

// More on how to set up stories at: https://avatars.githubusercontent.com/u/126998848?s=400&u=954c2899cbaed4e2d27fd6332bfd9b518aff172f&v=4
const meta = {
  title: 'App/avatar',
  tags: ['autodocs'],
  render: (args) => {
    return avatar(args);
  },
  argTypes: {
    link: {description: 'endereço para o link do logo'},
    imgSrc: {description: 'endereço para a imgaem do logo'},
    descricao: {description: 'descrição da imagem do logo'}
  }
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  args: {
    link: 'github.com', 
    imgSrc: 'https://avatars.githubusercontent.com/u/126998848?s=400&u=954c2899cbaed4e2d27fd6332bfd9b518aff172f&v=4', 
    descricao: 'Octocat from Github '
  }
};

