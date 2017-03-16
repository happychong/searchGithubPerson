import React, { Component } from 'react';
import { UserProfile, UserRepos, Notes } from '../../components';
import wilddog from 'wilddog';
import getGithubInfo from '../../util/helper';

class Profile extends Component {
    state = {
        notes: [{
            key: "0",
            value: "hi"
        }],
        bio: {
            name: 'guoyongfeng'
        },
        repos: ['a', 'b', 'c']
    }
    componentDidMount(){
        var config = {
          syncURL: "https://react-git-chat.wilddogio.com" //输入节点 URL
        };
        wilddog.initializeApp(config);
        var ref = wilddog.sync().ref();
        // snapshot 里面的数据会一直和云端保持同步
        ref.on("value", (snapshot) => {
            this.setState({ notes: snapshot.val() });
        });
        // ajax请求Github
        getGithubInfo(this.props.params.username)
        .then( ( data ) => {
            // 测试一下传入用户名后返回的数据
            console.log('31');
            console.log( data );
            // 更新state数据
            data.name = data.login;
            this.setState({
              bio: data.bio,
              repos: data.repos
            })
        });
    }
    render(){
        console.log(this.props);
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile
                        username={this.props.params.username}
                        bio={this.state.bio} />
                    <br />
                </div>
                <div className="col-md-4">
                    <UserRepos repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes
                        username={this.props.params.username}
                        notes={this.state.notes} />
                </div>
            </div>
        )
    }
}

export default Profile
