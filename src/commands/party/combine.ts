import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.load('@ds-sfplugin/sf-party', 'party.combine', [
  'summary',
  'description',
  'examples',
  'flags.name.summary',
]);

export type PartyCombineResult = {
  path: string;
};

export default class PartyCombine extends SfCommand<PartyCombineResult> {
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

  public async run(): Promise<PartyCombineResult> {
    const { flags } = await this.parse(PartyCombine);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from /Users/tim.paulaskas/git-repos/sf-party/src/commands/party/combine.ts`);
    return {
      path: '/Users/tim.paulaskas/git-repos/sf-party/src/commands/party/combine.ts',
    };
  }
}
