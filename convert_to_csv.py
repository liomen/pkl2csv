import sys
import pandas as pd

def convert_to_csv(input_file):
    df = pd.read_feather(input_file)
    df.to_csv(input_file.replace('.pkl', '.csv'), index=True)

convert_to_csv(sys.argv[1])