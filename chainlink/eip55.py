##python3  eth_eip55.py
from eth_utils import to_checksum_address

address = "cd531a31c9cd4d11f4c3afa7c7fdae64150c29c1"

checksummed_address = to_checksum_address(address)

print(checksummed_address)
