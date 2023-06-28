from cryptography.fernet import Fernet
import sys
import shutil

def checkArgs() -> None:
    try:
        if sys.argv[1] == "--acceptdecrypt":
            decrypt()
        else:
            shutil.rmtree("C:/UVMC")
    except IndexError:
        shutil.rmtree("C:/UVMC")

def decrypt() -> None:
    with open('C:/UVMC/key.key', 'rb') as filekey:
        key = filekey.read()

    fernet = Fernet(key)

    with open('C:/UVMC/data.json', 'rb') as f:
        encrypted = f.read()

    decrypted = fernet.decrypt(encrypted)

    with open('C:/UVMC/data.json', 'wb') as f:
        f.write(decrypted)

if __name__ == "__main__":
    checkArgs()