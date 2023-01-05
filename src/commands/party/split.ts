import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.load('@ds-sfplugin/sf-party', 'party.split', [
  'summary',
  'description',
  'examples',
  'flags.name.summary',
]);

export type PartySplitResult = {
  path: string;
};

export default class PartySplit extends SfCommand<PartySplitResult> {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');
  public static examples = messages.getMessages('examples');

  public static flags = {
    name: Flags.string({
      summary: messages.getMessage('flags.name.summary'),
      char: 'n',
      required: false,
    }),
  };

  public async run(): Promise<PartySplitResult> {
    const { flags } = await this.parse(PartySplit);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from /Users/tim.paulaskas/git-repos/sf-party/src/commands/party/split.ts`);
    return {
      path: '/Users/tim.paulaskas/git-repos/sf-party/src/commands/party/split.ts',
    };
  }
}
