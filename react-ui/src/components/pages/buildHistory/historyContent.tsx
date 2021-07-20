import React from 'react';
import { historyPropsType } from '../../../types';
import Button from '../../pagesComponents/buttons/Button';
import Card from '../../pagesComponents/card/Card';


const HistoryContent: React.FC<historyPropsType> = (props) => {
  const { contentData } = props;

  const handleClick = ()  => {}
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
            id={data.id}
          />
        </div>
      ))}
      <Button text="Show More" handleClick ={handleClick}/>
    </div>
  );
};

export default HistoryContent;
