const chrome = require("chrome-aws-lambda")
const { launch } = require("puppeteer-core")

const exePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

interface Options {
  args: string[]
  executablePath: string
  headless: boolean
}

const getOptions = async (isDev: boolean) => {
  let options: Options
  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    }
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    }
  }

  return options
}

const getScreenshot = async (url: string, isDev: boolean) => {
  const options = await getOptions(isDev)
  const browser = await launch(options)
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 500 })
  await page.goto(url)
  return page.screenshot({ type: "jpeg", quality: 100 })
}

exports.handler = async (event, content, callback) => {
  try {
    const ogImage = await getScreenshot(
      "https://functionsnstuff.io/tools/og-image-generator",
      true
    )
    return {
      statusCode: 200,
      body: ogImage.toString("base64"),
      isBase64Encoded: true,
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: err.toString(),
    }
  }
}
