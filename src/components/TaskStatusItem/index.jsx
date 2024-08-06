import './TaskStatusItem.css';

const TaskStatusItem = ({ percent }) => {
  if (percent < 20)
    return (
      <div className="text-center">
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart red">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              stroke-dasharray={percent + ',100'}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">
              {percent}%
            </text>
          </svg>
        </div>
        <span className={'single-chart-status after:bg-red-500'}>
          Not Started
        </span>
      </div>
    );
  else if (percent < 50) {
    return (
      <div className="text-center">
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart orange">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              stroke-dasharray={percent + ',100'}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">
              {percent}%
            </text>
          </svg>
        </div>
        <span className={'single-chart-status after:bg-yellow-500'}>
          In Progress
        </span>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart green">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              stroke-dasharray={percent + ',100'}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">
              {percent}%
            </text>
          </svg>
        </div>
        <span className={'single-chart-status after:bg-green-500'}>
          Completed
        </span>
      </div>
    );
  }
};

export default TaskStatusItem;
