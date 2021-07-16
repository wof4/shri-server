
const { rm } = require('fs/promises');
const path = require('path');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';

const runBuild = async ({ repoName, commitHash, command, id }) => {

    command.includes('build') ? command = 'build' : command 
    const result = {}
    result.buildId = id

    const timeStart = Date.now()

    const buildDir = path.resolve(id)

    try {
        console.log('идет клонирование репозитория...')

        await execFile('git', ['clone', `http://github.com/${repoName}.git`, buildDir]);

        console.log('репозиторий', repoName, 'успешно склонирован')

        await execFile('git', ['checkout', commitHash], { cwd: buildDir });
        console.log('переключиение на коммит', commitHash, '...')

        console.log("идет установка зависимостей...")
        await execFile(npm, ["ci"], { cwd: buildDir });

        console.log("зависимости успешно установлены")

        console.log("выполнение команды", command, '...')

        const { stdout } = await execFile(npm, ['run', command], { cwd: buildDir });
        result.buildLog = stdout
        console.log("выполнение команды", command, 'успешно выполнено')
        result.success = true

    } catch (err) {
        console.log(`выполнение операции завершилось ошибкой ${err}`)
        result.buildLog = err.stderr
        result.success = false
    }
    const timeEnd = Date.now()

    result.duration = timeEnd - timeStart


    await rm(buildDir, { recursive: true, force: true, });


    return result

};

module.exports = runBuild;
