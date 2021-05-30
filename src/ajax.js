const apiHost = 'https://staging.helloagain.at';

export default {
    async fetchInitialRewards(){
        try {
            let response = await fetch(
              apiHost + '/api/v1/clients/5189/bounties/'
            );
            let json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
          }
    }
};