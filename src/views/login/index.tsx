import {Component, Vue} from 'vue-property-decorator';
import {loginReq} from '@/api/user';
import Cookies from 'js-cookie';
@Component
export default class LoginPage extends Vue {
    public username: string = '';
    public password: string | number = '';
    public login() {
        loginReq({user_name: this.username, password: this.password}).then((res) => {
            console.log(res.data);
            const {data: {code, msg}} = res;
            if (code === 0) {
                Cookies.set('token', 'value');
                this.$router.push('/home');
            } else {
                console.error(msg);
            }
        });
    }
    protected render() {
        return (
            <div class='login-page'>
                {/* 在JSX中,需要使用实例变量或者要书写JS表达式的,都要用花括号 */}
                <input type='text' v-model={this.username} />
                <input type='password' v-model = {this.password} />
                <button on-click = {this.login}>登陆</button>
            </div>
        );
    }
}
