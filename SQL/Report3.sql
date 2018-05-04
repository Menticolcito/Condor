SELECT  COUNT(DISTINCT user_profile.id_user) AS "Non-active​ ​Providers" 
FROM    user_profile, user_role 
WHERE   user_profile.id_user = user_role.id_user 
        AND user_role.cd_role_type = "PROVIDER" 
        AND user_role.in_status != 1 