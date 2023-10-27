const { defineConfig } = require("cypress");
const { writeFileSync } = require("fs");
const XLSX = require("xlsx");
const path = require("path");
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  projectId: '78epv3',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        convertXlsxToJson(filePath) {
          const workbook = XLSX.readFile(filePath)
          const worksheet = workbook.Sheets[workbook.SheetNames[0]]
          const jsonData = XLSX.utils.sheet_to_json(worksheet)
          
          const fileName = path.basename(filePath, '.xlsx')
          const jsonFilePath = `./cypress/fixtures/${fileName}.json`
          writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2))
          return null
        },
      });
      on('task', verifyDownloadTasks);
      },
    experimentalModifyObstructiveThirdPartyCode: true,
    },
    });

