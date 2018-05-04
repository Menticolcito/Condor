SELECT  user_role.cd_role_type AS "User Type", 
        ActiveUsers.Total AS "Total​ ​Active", 
        NoMiddleUsers.NoMiddle AS "No​ Middle Name" 
FROM    (
        SELECT  id_user, 
                SUM(IF(nm_last IS NULL, 1, 0)) AS NoMiddle 
        FROM user_profile 
        GROUP BY id_user
        ) AS NoMiddleUsers, 
        user_role, 
        (
        SELECT  cd_role_type, 
        FROM user_role 
        WHERE in_status = 1 
        GROUP BY cd_role_type
        ) AS ActiveUsers
WHERE   user_role.in_status = 1 
        AND user_role.id_user = NoMiddleUsers.id_user 
        AND ActiveUsers.cd_role_type = user_role.cd_role_type 
GROUP BY user_role.cd_role_type
