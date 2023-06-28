import os
from cryptography.fernet import Fernet

key: bytes = Fernet.generate_key()

with open('C:/UVMC/key.key', 'wb') as f:
    f.write(key)

os.system("attrib +h C:/UVMC/key.key")
os.system("attrib +h C:/UVMC")