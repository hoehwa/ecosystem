const LimitedTextarea = ({ rows, cols, value, limit }) => {
  const [content, setContent] = React.useState(value.slice(0, limit));

  const setFormattedContent = React.useCallback(
    text => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  return (
    <>
      <textarea
        rows={rows}
        cols={cols}
        onChange={event => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>
        {content.length}/{limit}
      </p>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <LimitedTextarea limit={32} value="Hello!" />
);
