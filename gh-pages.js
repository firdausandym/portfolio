var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/firdausandym/porto.git', // Update to point to your repository  
        user: {
            name: 'andy', // update to use your name
            email: 'firdausandym@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)