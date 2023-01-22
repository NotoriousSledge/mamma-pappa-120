import {exec} from 'node:child_process';

const log = (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    throw error;
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    throw stderr;
    return;
  }

  if (stdout) {
    console.log(`stdout: ${stdout}`);
  }
};
const stream = exec('find ./src -type f -exec unix2dos {} \\;', log);
stream.on('exit', () => console.log('Done!'));
stream.on('data', (data) => console.log(data));
stream.on('error', (error) => console.error(error));
