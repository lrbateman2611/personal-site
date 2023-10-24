import Container from 'react-bootstrap/esm/Container';

const ArchiveBot = () => {
  return (
    <Container>
      <br />
      <h1>
        <u>
          <a
            href='https://github.com/lrbateman2611/archive-bot'
            target='_blank'
            rel='noreferrer'
          >
            Archive Bot
          </a>
        </u>
      </h1>
      <br />
      <h4>Motivation:</h4>
      <p>
        The purpose of Archive Bot is to work around the 50 pin limit in a
        discord text channel.
      </p>
      <br />
      <h4>Description:</h4>
      <p>
        Archive Bot automatically copies pinned posts to an archive text channel
        in the same discord server.
      </p>
      <br />
      <h4>Features:</h4>
      <ul>
        <li>
          Downloads YouTube and TikTok videos using{' '}
          <a
            href='https://github.com/yt-dlp/yt-dlp'
            target='_blank'
            rel='noreferrer'
          >
            yt-dlp
          </a>{' '}
          if a link is contained in the pinned message
        </li>
        <br />
        <li>
          Copies any text contents of the pinned message to the archive channel
          (excluding video links that have been converted)
        </li>
        <br />
        <li>
          Copies an attachment from the pinned message to the archive channel if
          an attachment is found
        </li>
        <br />
        <li>
          Includes a link to the original post at the start of every message
          copied to the archive channel
        </li>
      </ul>
    </Container>
  );
};

export default ArchiveBot;
