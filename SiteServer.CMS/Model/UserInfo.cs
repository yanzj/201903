using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using Dapper.Contrib.Extensions;
using Newtonsoft.Json;
using SiteServer.CMS.DataCache;
using SiteServer.CMS.Model.Attributes;
using SiteServer.CMS.Plugin.Impl;
using SiteServer.CMS.Provider;
using SiteServer.Plugin;
using SiteServer.Utils;

namespace SiteServer.CMS.Model
{
    [Table(UserDao.DatabaseTableName)]
    [JsonConverter(typeof(UserConverter))]
    public class UserInfo : AttributesImpl, IUserInfo
    {
        public UserInfo()
        {

        }

        public UserInfo(IDataReader rdr) : base(rdr)
        {

        }

        public UserInfo(IDataRecord record) : base(record)
        {

        }

        public UserInfo(DataRowView view) : base(view)
        {

        }

        public UserInfo(DataRow row) : base(row)
        {

        }

        public UserInfo(Dictionary<string, object> dict) : base(dict)
        {

        }

        public UserInfo(NameValueCollection nvc) : base(nvc)
        {

        }

        public UserInfo(object anonymous) : base(anonymous)
        {

        }

        /// <summary>
        /// �û�Id��
        /// </summary>
        public int Id
        {
            get => GetInt(UserAttribute.Id);
            set => Set(UserAttribute.Id, value);
        }

        /// <summary>
        /// �û�����
        /// </summary>
        public string UserName
        {
            get => GetString(UserAttribute.UserName);
            set => Set(UserAttribute.UserName, value);
        }

        /// <summary>
        /// ����ʱ�䡣
        /// </summary>
        public string Password
        {
            get => GetString(UserAttribute.Password);
            set => Set(UserAttribute.Password, value);
        }

        /// <summary>
        /// ����ʱ�䡣
        /// </summary>
        public string PasswordFormat
        {
            get => GetString(UserAttribute.PasswordFormat);
            set => Set(UserAttribute.PasswordFormat, value);
        }

        /// <summary>
        /// ����ʱ�䡣
        /// </summary>
        public string PasswordSalt
        {
            get => GetString(UserAttribute.PasswordSalt);
            set => Set(UserAttribute.PasswordSalt, value);
        }

        /// <summary>
        /// ����ʱ�䡣
        /// </summary>
        public DateTime CreateDate
        {
            get => GetDateTime(UserAttribute.CreateDate, DateUtils.SqlMinValue);
            set => Set(UserAttribute.CreateDate, value);
        }

        /// <summary>
        /// ���һ����������ʱ�䡣
        /// </summary>
        public DateTime LastResetPasswordDate
        {
            get => GetDateTime(UserAttribute.LastResetPasswordDate, DateUtils.SqlMinValue);
            set => Set(UserAttribute.LastResetPasswordDate, value);
        }

        /// <summary>
        /// ���ʱ�䡣
        /// </summary>
        public DateTime LastActivityDate
        {
            get => GetDateTime(UserAttribute.LastActivityDate, DateUtils.SqlMinValue);
            set => Set(UserAttribute.LastActivityDate, value);
        }

        /// <summary>
        /// �û���Id��
        /// </summary>
        public int GroupId
        {
            get => GetInt(UserAttribute.GroupId);
            set => Set(UserAttribute.GroupId, value);
        }

        /// <summary>
        /// ��¼������
        /// </summary>
        public int CountOfLogin
        {
            get => GetInt(UserAttribute.CountOfLogin);
            set => Set(UserAttribute.CountOfLogin, value);
        }

        /// <summary>
        /// ������¼ʧ�ܴ�����
        /// </summary>
        public int CountOfFailedLogin
        {
            get => GetInt(UserAttribute.CountOfFailedLogin);
            set => Set(UserAttribute.CountOfFailedLogin, value);
        }

        /// <summary>
        /// �Ƿ�������û���
        /// </summary>
        public bool IsChecked
        {
            get => GetBool(UserAttribute.IsChecked);
            set => Set(UserAttribute.IsChecked, value);
        }

        /// <summary>
        /// �Ƿ�������
        /// </summary>
        public bool IsLockedOut
        {
            get => GetBool(UserAttribute.IsLockedOut);
            set => Set(UserAttribute.IsLockedOut, value);
        }

        /// <summary>
        /// ������
        /// </summary>
        public string DisplayName
        {
            get => GetString(UserAttribute.DisplayName);
            set => Set(UserAttribute.DisplayName, value);
        }

        /// <summary>
        /// �ֻ��š�
        /// </summary>
        public string Mobile
        {
            get => GetString(UserAttribute.Mobile);
            set => Set(UserAttribute.Mobile, value);
        }

        /// <summary>
        /// ���䡣
        /// </summary>
        public string Email
        {
            get => GetString(UserAttribute.Email);
            set => Set(UserAttribute.Email, value);
        }

        /// <summary>
        /// ͷ��ͼƬ·����
        /// </summary>
        public string AvatarUrl
        {
            get => GetString(UserAttribute.AvatarUrl);
            set => Set(UserAttribute.AvatarUrl, value);
        }

        /// <summary>
        /// �Ա�
        /// </summary>
        public string Gender
        {
            get => GetString(UserAttribute.Gender);
            set => Set(UserAttribute.Gender, value);
        }

        /// <summary>
        /// �������ڡ�
        /// </summary>
        public string Birthday
        {
            get => GetString(UserAttribute.Birthday);
            set => Set(UserAttribute.Birthday, value);
        }

        /// <summary>
        /// ΢�š�
        /// </summary>
        public string WeiXin
        {
            get => GetString(UserAttribute.WeiXin);
            set => Set(UserAttribute.WeiXin, value);
        }

        /// <summary>
        /// QQ��
        /// </summary>
        public string Qq
        {
            get => GetString(UserAttribute.Qq);
            set => Set(UserAttribute.Qq, value);
        }

        /// <summary>
        /// ΢����
        /// </summary>
        public string WeiBo
        {
            get => GetString(UserAttribute.WeiBo);
            set => Set(UserAttribute.WeiBo, value);
        }

        /// <summary>
        /// ��顣
        /// </summary>
        public string Bio
        {
            get => GetString(UserAttribute.Bio);
            set => Set(UserAttribute.Bio, value);
        }

        /// <summary>
        /// �����ֶΡ�
        /// </summary>
        public string SettingsXml
        {
            get => GetString(UserAttribute.SettingsXml);
            set => Set(UserAttribute.SettingsXml, value);
        }

        public override Dictionary<string, object> ToDictionary()
        {
            var dict = base.ToDictionary();
            
            var styleInfoList = TableStyleManager.GetUserStyleInfoList();

            foreach (var styleInfo in styleInfoList)
            {
                dict.Remove(styleInfo.AttributeName);
                dict[styleInfo.AttributeName] = Get(styleInfo.AttributeName);
            }

            foreach (var attributeName in UserAttribute.AllAttributes.Value)
            {
                if (StringUtils.StartsWith(attributeName, "Is"))
                {
                    dict.Remove(attributeName);
                    dict[attributeName] = GetBool(attributeName);
                }
                else
                {
                    dict.Remove(attributeName);
                    dict[attributeName] = Get(attributeName);
                }
            }

            foreach (var attributeName in UserAttribute.ExcludedAttributes.Value)
            {
                dict.Remove(attributeName);
            }

            return dict;
        }

        private class UserConverter : JsonConverter
        {
            public override bool CanConvert(Type objectType)
            {
                return objectType == typeof(IAttributes);
            }

            public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
            {
                var attributes = value as IAttributes;
                serializer.Serialize(writer, attributes?.ToDictionary());
            }

            public override object ReadJson(JsonReader reader, Type objectType, object existingValue,
                JsonSerializer serializer)
            {
                var value = (string)reader.Value;
                if (string.IsNullOrEmpty(value)) return null;
                var dict = TranslateUtils.JsonDeserialize<Dictionary<string, object>>(value);
                var content = new UserInfo(dict);

                return content;
            }
        }
    }
}
