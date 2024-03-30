import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · 哲的AI Chat` : '哲的AI Chat';
  }, [title]);

  return null;
});

export default PageTitle;
