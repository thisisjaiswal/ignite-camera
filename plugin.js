// Ignite CLI plugin for Camera
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-camera'
const NPM_MODULE_VERSION = '0.0.1'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'CameraExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME)

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'Camera Example' })

  // Example of copying templates/Camera to App/Camera
  // if (!filesystem.exists(`${APP_PATH}/App/Camera`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/Camera`, `${APP_PATH}/App/Camera`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../Camera/Camera'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME)

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/Camera folder
  // const removeCamera = await context.prompt.confirm(
  //   'Do you want to remove App/Camera?'
  // )
  // if (removeCamera) { filesystem.remove(`${APP_PATH}/App/Camera`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../Camera/Camera'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

