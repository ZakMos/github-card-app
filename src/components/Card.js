import React, { Component } from 'react';
import '..;'';./;//App.css';



class Card extends Component {
  render() {
    // في هذه الحالة يتم استدعاء طلب واحد فقط، ولتغيير هذا، يمكن استبداله للكود التالي:
    // const profile = testData[0];

    // هنا تم تغييره لبروبس.. وتم إضافة الكود الاول تيست داتا إلى ملف كارد ليست ـ ليستدعي البروبس من هنا، ونقل كامل التيست داتا إلى ملف الكارد ليست
    const profile = this.props;

    return (
      <div className= "github-profile">
        <img src={profile.avatar_url} alt="user-info"/>
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
      </div>
    );
  }
}

export default Card;
