import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { ChasingDots } from "better-react-spinkit"
import { motion } from "framer-motion"
import { FiClock } from "react-icons/fi"

interface Pages {
  title: string
  image: { url: string; type: string }
  description: string
  pageUrl: string
}

const OgCrawler = ({ setOgCrawler }) => {
  const [url, setUrl] = useState("")
  const [pages, setPages] = useState([])
  const [siteUrl, setSiteUrl] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  const [duration, setDuration] = useState(0)
  const [errorsFound, setErrorsfound] = useState([])
  const [fetchError, setFetchError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const start = new Date().getTime()
    e.preventDefault()

    setPages([])
    setSiteUrl("")
    setDuration(0)
    setErrorsfound([])
    if (url.length < 1) {
      return
    }

    let formattedUrl
    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      formattedUrl = "https://" + url
    } else {
      formattedUrl = url
    }

    setOgCrawler(true)
    setIsFetching(true)
    try {
      const res = await axios.post("https://og-crawler.now.sh", formattedUrl, {
        timeout: 20000,
      })
      setPages(res.data.pages)
      setSiteUrl(res.data.url)
      setErrorsfound(res.data.errors)
      setFetchError(false)
      setOgCrawler(false)
    } catch (err) {
      console.log(err)
    } finally {
      const now = new Date().getTime() - start
      setDuration(now)
      setIsFetching(false)
      setFetchError(true)
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputField
            name="url"
            autoCorrect="off"
            autoCapitalize="none"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
          />
          <Button disabled={isFetching}>
            {isFetching ? (
              "Fetching..."
            ) : (
              <>
                <FiClock style={{ marginRight: 7 }} /> Start
              </>
            )}
          </Button>
        </InputGroup>
        {duration != 0 && (
          <DurationCrawl>
            Website crawled in{" "}
            <DurationText>{`${(duration / 1000).toFixed(3)}s`}</DurationText>
          </DurationCrawl>
        )}
        {duration === 0 && !isFetching && (
          <>
            <DurationCrawl>
              Enter a URL to fetch the website's open-graph info and errors.
            </DurationCrawl>
            <DurationCrawl>
              Please note that at the moment the serverless function times out
              after 10s.
            </DurationCrawl>
          </>
        )}
      </form>
      <>
        {errorsFound?.length > 0 ? (
          <ErrorsWrapper>
            <ErrorsTitle>
              Found <ErrorsSpan>{errorsFound?.length}</ErrorsSpan> errors
            </ErrorsTitle>
            <ErrorsContent>
              {errorsFound?.map((error: string, i) => (
                <ErrorsText key={i}>
                  <ErrorsSpan>{error.split(" ")[0]}</ErrorsSpan>{" "}
                  <a
                    href={error.split(" ")[1]}
                    target="_blank"
                    rel="nofollowers"
                  >
                    {error.split(" ")[1]}
                  </a>
                </ErrorsText>
              ))}
            </ErrorsContent>
          </ErrorsWrapper>
        ) : null}
        {isFetching ? (
          <LoadingWrapper>
            <ChasingDots color="white" size={48} />
          </LoadingWrapper>
        ) : (
          <>
            <Results>
              {pages?.length > 0 &&
                pages.map(
                  ({ title, description, image, pageUrl }: Pages, i) => {
                    if (
                      image.url.indexOf("https://") !== 0 &&
                      image.url.indexOf("https://") !== 0 &&
                      image.url.length > 0
                    ) {
                      image["url"] = `${siteUrl}${image.url}`
                    }
                    return (
                      <Card key={i}>
                        <OgImage src={image.url} />
                        <Content>
                          <OgTitle>{title}</OgTitle>
                          <OgDescription>{description}</OgDescription>
                          <a href={pageUrl} target="_blank" rel="nofollower">
                            <PageUrl>{pageUrl}</PageUrl>
                          </a>
                        </Content>
                      </Card>
                    )
                  }
                )}
            </Results>
            {pages?.length === 0 && fetchError && (
              <Content>
                <h3 style={{ textAlign: "center", lineHeight: "1.6em" }}>
                  Oups! This is a WIP. For now, serverless function times out
                  after 10s. <br />
                  Make sure the website exists or please try on a smaller
                  website.
                </h3>
              </Content>
            )}
          </>
        )}
      </>
    </Wrapper>
  )
}

export default OgCrawler

// Styles
const Wrapper = styled.div`
  position: relative;
`

const InputGroup = styled.div`
  padding-bottom: 1rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  background: #112;
  padding: 3rem;
  width: min-content;
  border-radius: 20px;
  border: 1px solid #222;

  &:not(:last-of-type) {
    border-bottom: 2px solid #222;
  }
`

const InputField = styled.input`
  border: 1px solid #111;
  color: #333;
  background: ghostwhite;
  padding: 1em 0.8em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: inherit;
  border: 1px solid #222;
  min-width: 40rem;
  height: 5rem;
  margin-right: 2rem;
  -webkit-appearance: none;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const Results = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 2rem 0rem;
`

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
`

const ErrorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`

const ErrorsContent = styled.div`
  display: flex;
  flex-direction: column;
`

const ErrorsTitle = styled.h3``

const ErrorsSpan = styled.span`
  color: red;
  font-weight: 700;
`

const ErrorsText = styled.span`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

const Card = styled.div`
  border: 1px solid #222;
  border-bottom: 1px solid #333;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  width: 45rem;
  background: #111;
  border-radius: 10px;
  overflow: hidden;
`

const Content = styled.div`
  padding: 1rem 3rem;
`

const OgImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  margin-bottom: 2rem;
  border-bottom: 1px solid #222;
`

const OgTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`

const OgDescription = styled.p``

const PageUrl = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--pink);
`

const Button = styled(motion.button)`
  padding: 0.8em 2em;
  font-size: 1.6rem;
  font-weight: 500;
  border: 1px solid var(--pink);
  border-radius: 5px;
  background: var(--pink);
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  height: 5rem;

  &:disabled {
    pointer-events: none;
    opacity: 0.8;
  }
`

const DurationCrawl = styled.p`
  text-align: center;
  color: #aaa;

  &:first-of-type {
    margin-top: 4rem;
  }
`

const DurationText = styled.span`
  color: lightgreen;
`
