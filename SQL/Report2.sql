SELECT  COUNT(DISTINCT user_role.id_user) AS "Active​ ​Licensees​ ​With​ ​Address​ ​Info" 
FROM    user_role, user_address 
WHERE   (user_role.cd_role_type = "LICENSEE" 
        OR user_role.cd_role_type = "LIMITED")
        AND user_role.in_status = 1 
        AND user_address.id_user = user_role.id_user    