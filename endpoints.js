exports.endpoints = [
  {
    Path: '/api/topics',
    Description: 'Returns an array of topic objects',
    Method: 'GET'
  },
  {
    Path: '/api/topics',
    Description: 'Returns posted topic',
    Method: 'POST'
  },
  {
    Path: '/api/topics/:topic',
    Description: 'Deleted topic by slug',
    Method: 'DELETE'
  },
  {
    Path: '/api/topics/:topic/articles',
    Description: 'Returns an array of article objects by topic',
    Method: 'GET'
  },
  {
    Path: ' /api/topics/:topic/articles',
    Description: 'Returns posted article by topic',
    Method: 'POST'
  },
  {
    Path: ' /api/articles',
    Description: 'Returns an array of article objects',
    Method: 'GET'
  },
  {
    Path: ' /api/articles/:article_id',
    Description: 'Returns an array of article by article_id',
    Method: 'GET'
  },
  {
    Path: ' /api/articles/:article_id',
    Description: 'Updates article by article_id',
    Method: 'PATCH'
  },
  {
    Path: ' /api/articles/:article_id',
    Description: 'Deletes article by article_id',
    Method: 'DELETE'
  },
  {
    Path: ' /api/articles/:article_id/comments',
    Description: 'Returns comments by article_id',
    Method: 'GET'
  },
  {
    Path: ' /api/articles/:article_id/comments',
    Description: 'Returns posted comments by article_id',
    Method: 'POST'
  },
  {
    Path: ' /api/articles/:article_id/comments/:comment_id',
    Description: 'Updates comments by comment_id',
    Method: 'PATCH'
  },
  {
    Path: ' /api/articles/:article_id/comments/:comment_id',
    Description: 'Deletes comments by comment_id',
    Method: 'DELETE'
  },
  {
    Path: ' /api/users',
    Description: 'Returns users',
    Method: 'GET'
  },
  {
    Path: ' /api/users/:username',
    Description: 'Returns users by username',
    Method: 'GET'
  }
];
