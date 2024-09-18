import { Command } from "npm:commander";
import prompts from "npm:prompts";
import chalk from "npm:chalk"

const program = new Command();

program
  .name('blonkz init')
  .description('CLI tool to add Blonkz to your project')
  .version('0.0.1');

program.command('init')
  .description('Step by step CLI tool to add Blonkz to your project')
  .option("-d, --defaults,", "use default configuration.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    Deno.cwd()
  )
  .action((options: any) => {
    const limit = options.first ? 1 : undefined;
    console.log('test');
    promptForMinimalConfig('test');
  });

program.parse();


export async function promptForMinimalConfig(optionsA: any) {
    const highlight = (text: string) => chalk.cyan(text)

    const options = await prompts([
        {
            type: "toggle",
            name: "typescript",
            message: `Install Location of Blonkz? ${highlight("Default '/ui'")} `,
            initial: true,
            active: `Default Folder`,
            inactive: "Customize Install Location",
        }, 
        {
            type: "text",
            name: "install location",
            message: `Where would you like to download Blonkz to?`,
            initial: '/custom/path/to/blonkz-ui/folder',
          }
        ]
    );
    
}