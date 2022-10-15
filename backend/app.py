from flask import Flask

import os
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)

"""
Enable all resources for cross origin resource sharing to ease development.
- Javascript should access the api
"""
CORS(app, resources=r'*')

@app.route("/")
def hello_world():
    """
    Connect to MySql Server
    Should be moved to the DataMappers
    """
    conn = mysql.connector.connect(
        user='root',
        password='root',
        host='db',
        database='app',
        use_pure=False
    )

    cursor = conn.cursor()
    cursor.execute("SELECT email FROM login")
    logins = cursor.fetchall()
    cursor.close()
    conn.close()
    
    res = ""
    
    for login in logins:
      res = res + login[0]
    
    return "<p>Hello, World!</p>"+res
    
# main driver function
if __name__ == "__main__":
    app.run()