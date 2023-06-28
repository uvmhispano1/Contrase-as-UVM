from cryptography.fernet import Fernet

with open('C:/UVMC/key.key', 'rb') as filekey:
    key = filekey.read()

fernet = Fernet(key)

with open('C:/UVMC/data.json', 'rb') as f:
    file = f.read()

encrypted: bytes = fernet.encrypt(file)

with open('C:/UVMC/data.json', 'wb') as f:
    f.write(encrypted)