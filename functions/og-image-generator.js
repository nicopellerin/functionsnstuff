const chrome = require("chrome-aws-lambda")
const puppeteer = require("puppeteer-core")

const exePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

const getOptions = async isDev => {
  let options
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

const getScreenshot = async (url, isDev) => {
  const options = await getOptions(isDev)
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1.5 })
  await page.goto(url)
  await page.waitFor(1500)
  const image = await page.$("#og-image")
  const buffer = await image.screenshot({ type: "png" })
  await browser.close()
  const base64Image = buffer.toString("base64")
  return base64Image
}

exports.handler = async (event, content, callback) => {
  try {
    const ogImage = await getScreenshot(
      "http://localhost:8888/tools/og-image-generator",
      true
    )
    return {
      statusCode: 200,
      body: ogImage,
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
