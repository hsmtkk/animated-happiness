import dotenv
import openai
from openai.types import Image, ImagesResponse

dotenv.load_dotenv()

client = openai.Client()

resp = client.images.generate(prompt="a dancing shark", n=1, size="256x256")

url = resp.model_dump()["data"][0]["url"]

print(url)
