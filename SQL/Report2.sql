SELECT  COUNT(DISTINCT user_role.id_user) AS "Active​ ​Licensees​ ​With​ ​Address​ ​Info" 
FROM    user_role, user_address 
        AND user_address.id_user = user_role.id_user 
        
