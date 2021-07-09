import React from 'react';
import Button from '../../pagesComponents/buttons/Button';
import Card from '../../pagesComponents/card/Card';

const HistoryContent = (props) => {
  const { contentData } = props;
  return (
    <div>
      {contentData.map((data) => (
        <div key={data.id}>
          <Card
            status={data.status}
            buildNumber={data.buildNumber}
            branchName={data.branchName}
            authorName={data.authorName}
            commitMessage={data.commitMessage}
            commitHash={data.commitHash}
            start={data.start}
            duration={data.duration}
          />
        </div>
      ))}
      <Button text="Show More" />
    </div>
  );
};

export default HistoryContent;
