import React, { useState } from 'react';
import styled from 'styled-components';
import { isURL } from 'validator';
import { lighten, darken } from 'polished';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { breakpoints, colors } from '../helpers/globalStyles';
import { makeMeShortPost } from '../helpers/makeMeShortPost';
import { useTheme } from './hooks/Theme/useTheme';

export const Form = () => {
  const BASE_URL = window.location.origin;

  const [displayError, setDisplayError] = useState();
  const [isCopied, setIsCopied] = useState(false);
  const [inputURL, setInputURL] = useState();
  const [inputCode, setInputCode] = useState();
  const [generatedURL, setGeneratedURL] = useState();
  const [generatedCode, setGeneratedCode] = useState();

  const { theme } = useTheme();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isURL(inputURL)) {
      if (inputCode?.length <= 10 || !inputCode) {
        const { error, ...newURL } = await makeMeShortPost({
          URL: inputURL,
          code: inputCode,
        });

        if (error) {
          setDisplayError(error);
          setGeneratedURL(null);
          setGeneratedCode(null);
          setIsCopied(false);
        } else {
          setDisplayError(null);
          setGeneratedURL(newURL.originalURL);
          setGeneratedCode(newURL.shortURLCode);
          setIsCopied(false);
        }
      } else {
        setDisplayError('Custom URL cannot be longer than 10 characters');
        setGeneratedURL(null);
        setGeneratedCode(null);
        setIsCopied(false);
      }
    } else {
      setDisplayError('Please add a valid URL');
      setGeneratedURL(null);
      setGeneratedCode(null);
      setIsCopied(false);
    }
  };

  return (
    <StyledForm className="Form" theme={theme}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url" className="url-label">
          <span>Enter URL *</span>
          <input
            required
            name="url"
            type="text"
            value={inputURL}
            onChange={(event) => setInputURL(event.target.value)}
            placeholder="Enter URL to shorten here"
          />
        </label>
        <label htmlFor="urlCode" className="urlCode-label">
          <span>Enter custom code</span>
          <input
            name="urlCode"
            type="text"
            value={inputCode}
            onChange={(event) => setInputCode(event.target.value)}
            placeholder="If blank, a random 10 chars code will be generated for you"
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      {displayError && <div className="feedback displayError">{`${displayError}`}</div>}
      {generatedURL && generatedCode && (
        <div className="feedback generatedResult">
          <div className="main">
            <div className="text">
              I&apos;ve successfully created your Teeny-Weeny URL
            </div>
            <div className="expires">
              <span>Note:</span>
              Your Teeny-Weeny URL will be removed if not used in 3 days
            </div>
          </div>
          <CopyToClipboard
            text={`${BASE_URL}/${generatedCode}`}
            onCopy={() => setIsCopied(true)}
          >
            <button>{isCopied ? 'Copied!' : 'Copy Teeny-Weeny URL'}</button>
          </CopyToClipboard>
        </div>
      )}
    </StyledForm>
  );
};

const StyledForm = styled.div`
  padding: 75px 5%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme === 'dark'
      ? lighten(0.1, colors[theme].tertiary)
      : darken(0.04, colors[theme].tertiary)};
  margin: 100px 0;
  @media ${breakpoints.mobile} {
    margin: 50px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    label {
      display: flex;
      align-items: center;
      @media ${breakpoints.mobile} {
        align-items: flex-start;
        flex-direction: column;
      }
      span {
        flex: 1;
      }
      input {
        padding: 5px 10px;
        flex: 3;
        margin-left: 10px;
        color: ${({ theme }) => colors[theme].secondaryContrast};
        @media ${breakpoints.mobile} {
          width: 100%;
          margin-left: 0;
        }
        &::placeholder {
          color: ${({ theme }) => colors[theme].tertiaryContrast};
          font-size: 0.75em;
        }
      }
    }
    input {
      flex: 1;
      margin: 20px 0;
      &[type='submit'] {
        background: ${({ theme }) => colors[theme].secondary};
        color: ${({ theme }) => colors[theme].secondaryContrast};
        padding: 10px;
        border: 3px solid ${({ theme }) => colors[theme].secondaryContrast};
        border-bottom-width: 5px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  .feedback {
    padding: 20px 0 20px 20px;
    border-left: 5px solid;
    display: flex;
    @media ${breakpoints.mobile} {
      flex-direction: column;
    }
  }
  .displayError {
    border-left-color: ${({ theme }) => colors[theme].error};
  }
  .generatedResult {
    border-left-color: ${({ theme }) => colors[theme].success};
    .main {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: baseline;
      .text {
        flex: 1;
      }
      .expires {
        font-size: 0.75em;
        span {
          font-size: 1em;
          margin-right: 5px;
          font-weight: bold;
        }
      }
    }
    button {
      padding: 10px;
      color: ${({ theme }) => colors[theme].secondaryContrast};
      cursor: pointer;
    }
  }
`;
